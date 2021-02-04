import { GitFlowFactory } from '@/modules/git-flow/factory';

const main = async () => {
    const gitFlow = await GitFlowFactory.assemble();
    await gitFlow.handle();
};

main()
    .catch((err) => {
        console.error(err);
        console.error(err.stack);
        process.exit(err.code || -1);
    });
