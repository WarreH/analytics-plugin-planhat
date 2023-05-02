import node from './node/index';
import browser from './browser/index';

const isNode = typeof window === 'undefined'
export default isNode ? node : browser
