import { WikServerAction } from "./server.action";
import { WikResponse } from "../constants/responses/response";

// Auth
import { LoginAction } from "./auth/login.action";
import { SignupAction } from "./auth/signup.action";

// Settings
import { FindSettingsAction } from "./settings/findSettings.action";
import { UpdateSettingsAction } from "./settings/updateSettings.action";

// User
import { FindUserAction } from "./user/findUser.action";
import { UpdateUserAction } from "./user/updateUser.action";
import { DeleteUserAction } from "./user/deleteUser.action";
import { DropUserAction } from "./user/dropUser.action";
import { SearchUsersAction } from "./user/searchUsers.action";

// Post
import { CreatePostAction } from "./post/createPost.action";
import { FindPostAction } from "./post/findPost.action";
import { GetPostsAction } from "./post/getPosts.action";
import { UpdatePostAction } from "./post/updatePost.action";
import { SearchPostsAction } from "./post/searchPosts.action";

// Community
import { CreateCommunityAction } from "./community/createCommunity.action";
import { FindCommunityAction } from "./community/findCommunity.action";
import { GetCommunitiesAction } from "./community/getCommunities.action";
import { UpdateCommunityAction } from "./community/updateCommunity";
import { SearchCommunitiesAction } from "./community/searchCommunities.action";

// Notion
import { CreateNotionAction } from "./notion/createNotion.action";
import { FindNotionAction } from "./notion/findNotion.action";
import { GetNotionsAction } from "./notion/getNotions.action";
import { UpdateNotionAction } from "./notion/updateNotion.action";

// Reaction
import { CreateReactionAction } from "./reaction/createReaction.action";
import { GetReactionsAction } from "./reaction/getReactions.action";
import { DeleteReactionAction } from "./reaction/deleteReaction.action";

// Feed
import { GetHomeFeedAction } from "./feed/getHomeFeed.action";

export class Action {
    static Login = LoginAction;
    static Signup = SignupAction;

    static FindSettings = FindSettingsAction;
    static UpdateSettings = UpdateSettingsAction;

    static FindUser = FindUserAction;
    static UpdateUser = UpdateUserAction;
    static DeleteUser = DeleteUserAction;
    static DropUser = DropUserAction;
    static SearchUsers = SearchUsersAction;

    static CreatePost = CreatePostAction;
    static FindPost = FindPostAction;
    static GetPosts = GetPostsAction;
    static UpdatePost = UpdatePostAction;
    static SearchPosts = SearchPostsAction;

    static CreateReaction = CreateReactionAction;
    static GetReactions = GetReactionsAction;
    static DeleteReaction = DeleteReactionAction;

    static CreateCommunity = CreateCommunityAction;
    static FindCommunity = FindCommunityAction;
    static GetCommunities = GetCommunitiesAction;
    static UpdateCommunity = UpdateCommunityAction;
    static SearchCommunities = SearchCommunitiesAction;

    static CreateNotion = CreateNotionAction;
    static FindNotion = FindNotionAction;
    static GetNotions = GetNotionsAction;
    static UpdateNotion = UpdateNotionAction;

    static GetHomeFeed = GetHomeFeedAction;
}