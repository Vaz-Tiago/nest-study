import addJestHbsExtension from 'jest-hbs-extension';
import { ConfigService } from '../src/config/config.service';

const configService = new ConfigService();

const templatesDirectory = configService.get<string>('templates.path')
addJestHbsExtension(templatesDirectory);