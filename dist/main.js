"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('main.ts');
    logger.debug('HOST >>>>>>   ', process.env.HOST);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map