/**   
 * api接口统一管理
 */
import { get, post, postImg } from './http'


/**
 * 用户登录
*/
export const loginUser = p => post('login', p);

/**
 * 获取短信验证码
*/
export const smsCode = p => post('get_sms_code', p);

/**
 * 获取图形验证码
*/
export const getCaptcha = () => post('get_captcha');

/**
 * 获取用户基本信息
*/
export const getBasicInfo = (p,c) => post('basic_info',p,c);

/**
 * 获取农业知识分类
*/
export const getKnowledgeType = p => post('technology_type', p);

/**
 * 获取农业知识列表
*/
export const getKnowledge = p => post('technology_page', p);

/**
 * 获取农业知识详情
*/
export const getKnowledgeDetail = p => post('technology_detail', p);


/**
 * 获取种植经验分类
*/
export const getExperienceType = p => post('plant_type', p);

/**
 * 获取种植经验列表
*/
export const getExperienceList = p => post('plant_page', p);

/**
 * 获取种植经验详情
*/
export const getExperienceDetail = p => post('plant_detail', p);

/**
 * 获取专家分类
*/
export const getExpertType = p => post('expert_type', p);

/**
 * 获取专家列表
*/
export const getExpertList = p => post('expert_page', p);

/**
 * 获取专家列表相关问题
*/
export const getRelationQs = p => post('knowledge_relation_question', p);

/**
 * 获取专家详情
*/
export const getExpertDetail = p => post('expert_detail', p);

/**
 * 获取知识问答列表
*/
export const getKnowQsList = p => post('knowledge_question_page', p);

/**
 * 保存知识问答问题
*/
export const saveKnowQs = (p,c) => post('save_knowledge_question', p,c);

/**
 * 发布专家评论
*/
export const saveExpertComment = (p,c) => post('save_expert_comment', p,c);

/**
 * 发布专家评论
*/
export const saveExpertCommand = (p,c) => post('save_expert_command', p,c);

/**
 * 获取专家评论
*/
export const getExportComment = (p,c) => post('expert_comment_page', p,c);

/**
 * 保存专家提问
*/
export const saveExpertQs = (p) => post('save_expert_question', p);

/**
 * 知识问答问题详情
*/
export const getKnowQsDetail = (p) => post('knowledge_question_detail', p);

/**
 * 知识问答答案列表
*/
export const getKnowAnswer = (p) => post('knowledge_answer_page', p);

/**
 * 知识问答答案列表
*/
export const saveKnowAnswer = (p) => post('save_knowledge_answer', p);

/**
 * 知识问答答案列表
*/
export const saveKnowAnswerReply = (p) => post('save_knowledge_answer_reply', p);

/**
 * 系统消息列表
*/
export const getMessage = (p) => post('message_page', p);

/**
 * 我发布的种植经验
*/
export const getPlantIndex = (p) => post('get_user_plant_index', p);

/**
 * 发布种植经验
*/
export const savePlantPage = (p,c) => post('save_plant_info', p,c);

/**
 * 发布种植经验
*/
export const getUserList = (p,c) => post('get_user_list', p,c);

/**
 * 上传附件
*/
export const upload = (p) => postImg('api_upload', p);

/**
 * 知识地图
*/
export const getKnowLedgeMap = (p) => postImg('knowledge_map', p);

/**
 * 未读消息数
*/
export const getMessageUnread = (p) => postImg('get_message_unread_count', p);

/**
 * 消息已读
*/
export const messageSetRead = (p) => post('message_set_read', p);

/**
 * 种植经验分类
*/
export const getPlantType = (p) => post('plant_type', p);

/**
 * 种植经验详情
*/
export const getPlantDetail = (p) => post('plant_detail', p);

/**
 * 农业知识标签
*/
export const getTagList = (p) => post('technology_tag_list', p);

/**
 * 农业知识热度
*/
export const getHotRank = (p) => post('technology_hot_rank', p);

/**
 * 农业知识收藏
*/
export const getTecCollection = (p) => post('technology_collection', p);

/**
 * 个人中心知识文章访问和收藏
*/
export const getLogPage = (p) => post('get_log_page', p);


export const getLogin = (p) => post('http://58.243.0.26:81/api/frontend_login', p);

/**
 * 知识问题详情点赞
*/
export const upVote = (p) => post('knowledge_answer_upvote', p);