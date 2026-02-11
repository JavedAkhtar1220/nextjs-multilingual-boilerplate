import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);
console.log('middleware run :>> ');
export const config = {
   matcher: ['/((?!api|_next|.*\\..*).*)'] 
};