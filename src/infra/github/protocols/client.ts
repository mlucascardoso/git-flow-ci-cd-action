import { Context } from '@actions/github/lib/context';

export interface Client {
    context: Context;
    getOctokit(token: string, options?: OctokitOptions): InstanceType<any>;
}

interface OctokitOptions {
    authStrategy?: any;
    auth?: any;
    userAgent?: string;
    previews?: string[];
    baseUrl?: string;
    log?: {
        debug: (message: string) => unknown;
        info: (message: string) => unknown;
        warn: (message: string) => unknown;
        error: (message: string) => unknown;
    };
    request?: any;
    timeZone?: string;
    [option: string]: any;
};
