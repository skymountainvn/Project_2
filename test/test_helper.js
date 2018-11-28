const User = require('../src/models/user.model');
const Comment = require('../src/models/comment.model');
const Story = require('../src/models/story.model');
require('../src/startDatabase');

beforeEach('Remove all data before each test', async () => {
    // await User.deleteMany();
    // await Story.deleteMany();
    // await Comment.deleteMany();
    // await User.deleteOne();
    // await Story.deleteOne();
    // await Comment.deleteOne();
    await User.remove();
    await Story.remove();
    await Comment.remove();
});