import { acceptance } from "helpers/qunit-helpers";
import { clearPopupMenuOptionsCallback } from "discourse/controllers/composer";
import { Promise } from "rsvp";

acceptance("Poll quote", {
  loggedIn: true,
  settings: { poll_enabled: true },
  beforeEach() {
    clearPopupMenuOptionsCallback();
  },
  pretend(server, helper) {
    server.get("/t/topic_with_two_polls.json", () => {
      return new Promise(resolve => {
        resolve(
          helper.response({
            post_stream: {
              posts: [
                {
                  id: 133,
                  name: null,
                  username: "bianca",
                  avatar_template:
                    "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
                  created_at: "2020-08-17T12:05:24.577Z",
                  cooked:
                    '<div class="poll" data-poll-status="open" data-poll-name="poll1" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="bf48cd4958a17180e2a298e246988f94">Alpha</li>\n<li data-poll-option-id="c19aa835729ab0413a84a2c9850c4005">Beta</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>\n<div class="poll" data-poll-status="open" data-poll-name="poll2" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="def034c6770c6fd3754c054ef9ec4721">First</li>\n<li data-poll-option-id="e0f55d1a981683789bec2a0b05eb70ef">Second</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>',
                  post_number: 1,
                  post_type: 1,
                  updated_at: "2020-08-17T12:05:24.577Z",
                  reply_count: 0,
                  reply_to_post_number: null,
                  quote_count: 0,
                  incoming_link_count: 0,
                  reads: 1,
                  readers_count: 0,
                  score: 0,
                  yours: true,
                  topic_id: 130,
                  topic_slug: "topic-with-two-polls",
                  display_username: null,
                  primary_group_name: null,
                  primary_group_flair_url: null,
                  primary_group_flair_bg_color: null,
                  primary_group_flair_color: null,
                  version: 1,
                  can_edit: true,
                  can_delete: false,
                  can_recover: false,
                  can_wiki: true,
                  link_counts: [
                    {
                      url:
                        "http://forum.example.com/t/topic-with-two-quoted-polls/129",
                      internal: true,
                      reflection: true,
                      title: "Topic with two quoted polls",
                      clicks: 0
                    }
                  ],
                  read: true,
                  user_title: "Tester",
                  title_is_group: false,
                  bookmarked: false,
                  actions_summary: [
                    {
                      id: 3,
                      can_act: true
                    },
                    {
                      id: 4,
                      can_act: true
                    },
                    {
                      id: 8,
                      can_act: true
                    },
                    {
                      id: 7,
                      can_act: true
                    }
                  ],
                  moderator: false,
                  admin: true,
                  staff: true,
                  user_id: 1,
                  hidden: false,
                  trust_level: 0,
                  deleted_at: null,
                  user_deleted: false,
                  edit_reason: null,
                  can_view_edit_history: true,
                  wiki: false,
                  reviewable_id: 0,
                  reviewable_score_count: 0,
                  reviewable_score_pending_count: 0,
                  calendar_details: [],
                  polls: [
                    {
                      name: "poll1",
                      type: "regular",
                      status: "open",
                      results: "always",
                      options: [
                        {
                          id: "bf48cd4958a17180e2a298e246988f94",
                          html: "Alpha",
                          votes: 0
                        },
                        {
                          id: "c19aa835729ab0413a84a2c9850c4005",
                          html: "Beta",
                          votes: 0
                        }
                      ],
                      voters: 0,
                      chart_type: "bar"
                    },
                    {
                      name: "poll2",
                      type: "regular",
                      status: "open",
                      results: "always",
                      options: [
                        {
                          id: "def034c6770c6fd3754c054ef9ec4721",
                          html: "First",
                          votes: 0
                        },
                        {
                          id: "e0f55d1a981683789bec2a0b05eb70ef",
                          html: "Second",
                          votes: 0
                        }
                      ],
                      voters: 0,
                      chart_type: "bar"
                    }
                  ]
                }
              ],
              stream: [133]
            },
            timeline_lookup: [[1, 0]],
            suggested_topics: [],
            tags: [],
            id: 130,
            title: "Topic with two polls",
            fancy_title: "Topic with two polls",
            posts_count: 1,
            created_at: "2020-08-17T12:05:24.500Z",
            views: 1,
            reply_count: 0,
            like_count: 0,
            last_posted_at: "2020-08-17T12:05:24.577Z",
            visible: true,
            closed: false,
            archived: false,
            has_summary: false,
            archetype: "regular",
            slug: "topic-with-two-polls",
            category_id: 1,
            word_count: 24,
            deleted_at: null,
            user_id: 1,
            featured_link: null,
            pinned_globally: false,
            pinned_at: null,
            pinned_until: null,
            image_url: null,
            draft: null,
            draft_key: "topic_130",
            draft_sequence: 0,
            posted: true,
            unpinned: null,
            pinned: false,
            current_post_number: 1,
            highest_post_number: 1,
            last_read_post_number: 1,
            last_read_post_id: 133,
            deleted_by: null,
            has_deleted: false,
            actions_summary: [
              {
                id: 4,
                count: 0,
                hidden: false,
                can_act: true
              },
              {
                id: 8,
                count: 0,
                hidden: false,
                can_act: true
              },
              {
                id: 7,
                count: 0,
                hidden: false,
                can_act: true
              }
            ],
            chunk_size: 20,
            bookmarked: false,
            topic_timer: null,
            private_topic_timer: null,
            message_bus_last_id: 1,
            participant_count: 1,
            queued_posts_count: 0,
            show_read_indicator: false,
            thumbnails: null,
            can_vote: false,
            vote_count: null,
            user_voted: false,
            details: {
              notification_level: 3,
              notifications_reason_id: 1,
              can_move_posts: true,
              can_edit: true,
              can_delete: true,
              can_remove_allowed_users: true,
              can_invite_to: true,
              can_invite_via_email: true,
              can_create_post: true,
              can_reply_as_new_topic: true,
              can_flag_topic: true,
              can_convert_topic: true,
              can_review_topic: true,
              can_close_topic: true,
              can_archive_topic: true,
              can_split_merge_topic: true,
              can_edit_staff_notes: true,
              can_remove_self_id: 1,
              participants: [
                {
                  id: 1,
                  username: "bianca",
                  name: null,
                  avatar_template:
                    "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
                  post_count: 1,
                  primary_group_name: null,
                  primary_group_flair_url: null,
                  primary_group_flair_color: null,
                  primary_group_flair_bg_color: null
                }
              ],
              created_by: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template:
                  "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              },
              last_poster: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template:
                  "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            },
            pending_posts: []
          })
        );
      });
    });

    server.get("/posts/by_number/130/1", () => {
      return new Promise(resolve => {
        resolve(
          helper.response({
            id: 133,
            name: null,
            username: "bianca",
            avatar_template:
              "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
            created_at: "2020-08-17T12:05:24.577Z",
            cooked:
              '<div class="poll" data-poll-status="open" data-poll-name="poll1" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="bf48cd4958a17180e2a298e246988f94">Alpha</li>\n<li data-poll-option-id="c19aa835729ab0413a84a2c9850c4005">Beta</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>\n<div class="poll" data-poll-status="open" data-poll-name="poll2" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="def034c6770c6fd3754c054ef9ec4721">First</li>\n<li data-poll-option-id="e0f55d1a981683789bec2a0b05eb70ef">Second</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>',
            post_number: 1,
            post_type: 1,
            updated_at: "2020-08-17T12:05:24.577Z",
            reply_count: 0,
            reply_to_post_number: null,
            quote_count: 0,
            incoming_link_count: 0,
            reads: 1,
            readers_count: 0,
            score: 0.2,
            yours: true,
            topic_id: 130,
            topic_slug: "topic-with-two-polls",
            display_username: null,
            primary_group_name: null,
            primary_group_flair_url: null,
            primary_group_flair_bg_color: null,
            primary_group_flair_color: null,
            version: 1,
            can_edit: true,
            can_delete: false,
            can_recover: false,
            can_wiki: true,
            user_title: "Tester",
            title_is_group: false,
            bookmarked: false,
            raw:
              "[poll name=poll1 type=regular results=always chartType=bar]\n* Alpha\n* Beta\n[/poll]\n\n[poll name=poll2 type=regular results=always chartType=bar]\n* First\n* Second\n[/poll]",
            actions_summary: [
              {
                id: 3,
                can_act: true
              },
              {
                id: 4,
                can_act: true
              },
              {
                id: 8,
                can_act: true
              },
              {
                id: 7,
                can_act: true
              }
            ],
            moderator: false,
            admin: true,
            staff: true,
            user_id: 1,
            hidden: false,
            trust_level: 0,
            deleted_at: null,
            user_deleted: false,
            edit_reason: null,
            can_view_edit_history: true,
            wiki: false,
            reviewable_id: null,
            reviewable_score_count: 0,
            reviewable_score_pending_count: 0,
            calendar_details: [],
            polls: [
              {
                name: "poll1",
                type: "regular",
                status: "open",
                results: "always",
                options: [
                  {
                    id: "bf48cd4958a17180e2a298e246988f94",
                    html: "Alpha",
                    votes: 0
                  },
                  {
                    id: "c19aa835729ab0413a84a2c9850c4005",
                    html: "Beta",
                    votes: 0
                  }
                ],
                voters: 0,
                chart_type: "bar"
              },
              {
                name: "poll2",
                type: "regular",
                status: "open",
                results: "always",
                options: [
                  {
                    id: "def034c6770c6fd3754c054ef9ec4721",
                    html: "First",
                    votes: 0
                  },
                  {
                    id: "e0f55d1a981683789bec2a0b05eb70ef",
                    html: "Second",
                    votes: 0
                  }
                ],
                voters: 0,
                chart_type: "bar"
              }
            ]
          })
        );
      });
    });

    server.get("/t/topic_with_two_quoted_polls.json", () => {
      return new Promise(resolve => {
        resolve(
          helper.response({
            post_stream: {
              posts: [
                {
                  id: 134,
                  name: null,
                  username: "bianca",
                  avatar_template:
                    "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
                  created_at: "2020-08-17T12:08:24.043Z",
                  cooked:
                    '<aside class="quote quote-modified" data-post="1" data-topic="130">\n  <div class="title">\n    <div class="quote-controls"></div>\n    <img alt="" width="20" height="20" src="/letter_avatar_proxy/v4/letter/b/3be4f8/40.png" class="avatar">\n    <a href="//forum.example.com/t/topic-with-two-polls/130">Topic with two polls</a> \n  </div>\n  <blockquote>\n    <a href="/t/topic-with-two-polls/130/1">poll</a>\n<a href="/t/topic-with-two-polls/130/1">poll</a>\n  </blockquote>\n</aside>\n',
                  post_number: 1,
                  post_type: 1,
                  updated_at: "2020-08-17T12:08:24.043Z",
                  reply_count: 0,
                  reply_to_post_number: null,
                  quote_count: 0,
                  incoming_link_count: 0,
                  reads: 1,
                  readers_count: 0,
                  score: 0,
                  yours: true,
                  topic_id: 131,
                  topic_slug: "topic-with-two-quoted-polls",
                  display_username: null,
                  primary_group_name: null,
                  primary_group_flair_url: null,
                  primary_group_flair_bg_color: null,
                  primary_group_flair_color: null,
                  version: 1,
                  can_edit: true,
                  can_delete: false,
                  can_recover: false,
                  can_wiki: true,
                  link_counts: [
                    {
                      url:
                        "http://forum.example.com/t/topic-with-two-polls/130",
                      internal: true,
                      reflection: false,
                      title: "Topic with two polls",
                      clicks: 0
                    }
                  ],
                  read: true,
                  user_title: "Tester",
                  title_is_group: false,
                  bookmarked: false,
                  actions_summary: [
                    {
                      id: 3,
                      can_act: true
                    },
                    {
                      id: 4,
                      can_act: true
                    },
                    {
                      id: 8,
                      can_act: true
                    },
                    {
                      id: 7,
                      can_act: true
                    }
                  ],
                  moderator: false,
                  admin: true,
                  staff: true,
                  user_id: 1,
                  hidden: false,
                  trust_level: 0,
                  deleted_at: null,
                  user_deleted: false,
                  edit_reason: null,
                  can_view_edit_history: true,
                  wiki: false,
                  reviewable_id: 0,
                  reviewable_score_count: 0,
                  reviewable_score_pending_count: 0,
                  calendar_details: []
                }
              ],
              stream: [134]
            },
            timeline_lookup: [[1, 0]],
            suggested_topics: [
              {
                id: 7,
                title: "Welcome to Discourse",
                fancy_title: "Welcome to Discourse",
                slug: "welcome-to-discourse",
                posts_count: 1,
                reply_count: 0,
                highest_post_number: 1,
                image_url: null,
                created_at: "2020-08-11T12:43:04.894Z",
                last_posted_at: "2020-08-11T12:43:04.959Z",
                bumped: true,
                bumped_at: "2020-08-11T12:43:04.959Z",
                archetype: "regular",
                unseen: false,
                last_read_post_number: 1,
                unread: 0,
                new_posts: 0,
                pinned: false,
                unpinned: true,
                visible: true,
                closed: false,
                archived: false,
                notification_level: 1,
                bookmarked: false,
                liked: false,
                tags: [],
                like_count: 0,
                views: 1,
                category_id: 1,
                featured_link: null,
                posters: [
                  {
                    extras: "latest single",
                    description: "Original Poster, Most Recent Poster",
                    user: {
                      id: 5,
                      username: "foo2",
                      name: null,
                      avatar_template:
                        "/letter_avatar_proxy/v4/letter/f/8edcca/{size}.png"
                    }
                  }
                ]
              },
              {
                id: 130,
                title: "Topic with two polls",
                fancy_title: "Topic with two polls",
                slug: "topic-with-two-polls",
                posts_count: 1,
                reply_count: 0,
                highest_post_number: 1,
                image_url: null,
                created_at: "2020-08-17T12:05:24.500Z",
                last_posted_at: "2020-08-17T12:05:24.577Z",
                bumped: true,
                bumped_at: "2020-08-17T12:05:24.577Z",
                archetype: "regular",
                unseen: false,
                last_read_post_number: 1,
                unread: 0,
                new_posts: 0,
                pinned: false,
                unpinned: null,
                visible: true,
                closed: false,
                archived: false,
                notification_level: 3,
                bookmarked: false,
                liked: false,
                tags: [],
                like_count: 0,
                views: 1,
                category_id: 1,
                featured_link: null,
                posters: [
                  {
                    extras: "latest single",
                    description: "Original Poster, Most Recent Poster",
                    user: {
                      id: 1,
                      username: "bianca",
                      name: null,
                      avatar_template:
                        "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
                    }
                  }
                ]
              }
            ],
            tags: [],
            id: 131,
            title: "Topic with two quoted polls",
            fancy_title: "Topic with two quoted polls",
            posts_count: 1,
            created_at: "2020-08-17T12:08:23.918Z",
            views: 1,
            reply_count: 0,
            like_count: 0,
            last_posted_at: "2020-08-17T12:08:24.043Z",
            visible: true,
            closed: false,
            archived: false,
            has_summary: false,
            archetype: "regular",
            slug: "topic-with-two-quoted-polls",
            category_id: 1,
            word_count: 9,
            deleted_at: null,
            user_id: 1,
            featured_link: null,
            pinned_globally: false,
            pinned_at: null,
            pinned_until: null,
            image_url: null,
            draft: null,
            draft_key: "topic_131",
            draft_sequence: 0,
            posted: true,
            unpinned: null,
            pinned: false,
            current_post_number: 1,
            highest_post_number: 1,
            last_read_post_number: 1,
            last_read_post_id: 134,
            deleted_by: null,
            has_deleted: false,
            actions_summary: [
              {
                id: 4,
                count: 0,
                hidden: false,
                can_act: true
              },
              {
                id: 8,
                count: 0,
                hidden: false,
                can_act: true
              },
              {
                id: 7,
                count: 0,
                hidden: false,
                can_act: true
              }
            ],
            chunk_size: 20,
            bookmarked: false,
            topic_timer: null,
            private_topic_timer: null,
            message_bus_last_id: 2,
            participant_count: 1,
            queued_posts_count: 0,
            show_read_indicator: false,
            thumbnails: null,
            can_vote: false,
            vote_count: null,
            user_voted: false,
            details: {
              notification_level: 3,
              notifications_reason_id: 1,
              can_move_posts: true,
              can_edit: true,
              can_delete: true,
              can_remove_allowed_users: true,
              can_invite_to: true,
              can_invite_via_email: true,
              can_create_post: true,
              can_reply_as_new_topic: true,
              can_flag_topic: true,
              can_convert_topic: true,
              can_review_topic: true,
              can_close_topic: true,
              can_archive_topic: true,
              can_split_merge_topic: true,
              can_edit_staff_notes: true,
              can_remove_self_id: 1,
              participants: [
                {
                  id: 1,
                  username: "bianca",
                  name: null,
                  avatar_template:
                    "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
                  post_count: 1,
                  primary_group_name: null,
                  primary_group_flair_url: null,
                  primary_group_flair_color: null,
                  primary_group_flair_bg_color: null
                }
              ],
              created_by: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template:
                  "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              },
              last_poster: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template:
                  "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            },
            pending_posts: []
          })
        );
      });
    });
  }
});

test("Quoted polls", async assert => {
  await visit("/t/-/topic_with_two_quoted_polls");
  await click(".quote-controls");
  assert.equal(find(".poll").length, 2);
});
