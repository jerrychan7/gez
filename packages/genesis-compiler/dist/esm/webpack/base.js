import Config from 'webpack-chain';
import { BaseGenesis } from '../utils';
export class BaseConfig extends BaseGenesis {
    constructor(ssr, target) {
        super(ssr);
        this.config = new Config();
        this.config.mode(this.ssr.isProd ? 'production' : 'development');
        this.config.set('target', ssr.getBrowsers(target));
        this.config.output.publicPath(this.ssr.publicPath);
        this.config.resolve.extensions.add('.js');
        this.ready = this.ssr.plugin.callHook('chainWebpack', {
            target,
            config: this.config
        });
        this.config.output.pathinfo(false);
        this.config.stats('errors-warnings');
        const alias = ssr.options?.build?.alias;
        if (typeof alias === 'object') {
            Object.keys(alias).forEach((k) => {
                const v = alias[k];
                this.config.resolve.alias.set(k, v);
            });
        }
    }
    async toConfig() {
        await this.ready;
        return this.config.toConfig();
    }
}
