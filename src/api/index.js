import reqMethod from './server';
import url from './url';

// 获取直播列表
const getLiveList = params => reqMethod('GET', url.live.liveList, params);
// 获取直播历史
const getLiveHistory = params => reqMethod('GET', url.live.history, params);
// 创建房间
const createRoom = params => reqMethod('GET', url.live.createRoom, params);
// 创建直播推流
const createLive = params => reqMethod('GET', url.live.live.replace(/{streamName}/,params.streamName), params);

export default {
	getLiveList,
	getLiveHistory,
	createRoom,
	createLive
};
