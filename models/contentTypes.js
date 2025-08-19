// Content Type Definitions for Arctic Travel Admin Panel

// 1. Trip Content Type
const Trip = {
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        { name: 'en', type: 'string', title: 'English', validation: 'required' },
        { name: 'no', type: 'string', title: 'Norwegian' },
        { name: 'de', type: 'string', title: 'German' },
        { name: 'ar', type: 'string', title: 'Arabic' }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title.en',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'summary',
      type: 'object',
      title: 'Summary',
      fields: [
        { name: 'en', type: 'text', title: 'English Summary', rows: 3 },
        { name: 'no', type: 'text', title: 'Norwegian Summary', rows: 3 },
        { name: 'de', type: 'text', title: 'German Summary', rows: 3 },
        { name: 'ar', type: 'text', title: 'Arabic Summary', rows: 3 }
      ]
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price (USD)',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
      description: 'Example: 12 Days',
      validation: Rule => Rule.required()
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      title: 'Featured on Homepage',
      initialValue: false
    },
    {
      name: 'destination',
      type: 'array',
      title: 'Destinations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'destination' }]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'overview',
      type: 'object',
      title: 'Overview',
      fields: [
        { name: 'en', type: 'array', title: 'English Overview', of: [{ type: 'block' }] },
        { name: 'no', type: 'array', title: 'Norwegian Overview', of: [{ type: 'block' }] },
        { name: 'de', type: 'array', title: 'German Overview', of: [{ type: 'block' }] },
        { name: 'ar', type: 'array', title: 'Arabic Overview', of: [{ type: 'block' }] }
      ]
    },
    {
      name: 'itinerary',
      type: 'array',
      title: 'Itinerary',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'dayNumber', type: 'number', title: 'Day Number', validation: Rule => Rule.required() },
            { name: 'dayTitle', type: 'object', title: 'Day Title', fields: [
              { name: 'en', type: 'string', title: 'English' },
              { name: 'no', type: 'string', title: 'Norwegian' },
              { name: 'de', type: 'string', title: 'German' },
              { name: 'ar', type: 'string', title: 'Arabic' }
            ]},
            { name: 'dayDescription', type: 'object', title: 'Day Description', fields: [
              { name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] },
              { name: 'no', type: 'array', title: 'Norwegian', of: [{ type: 'block' }] },
              { name: 'de', type: 'array', title: 'German', of: [{ type: 'block' }] },
              { name: 'ar', type: 'array', title: 'Arabic', of: [{ type: 'block' }] }
            ]}
          ]
        }
      ]
    },
    {
      name: 'included',
      type: 'object',
      title: 'Included/Excluded',
      fields: [
        { name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] },
        { name: 'no', type: 'array', title: 'Norwegian', of: [{ type: 'block' }] },
        { name: 'de', type: 'array', title: 'German', of: [{ type: 'block' }] },
        { name: 'ar', type: 'array', title: 'Arabic', of: [{ type: 'block' }] }
      ]
    },
    {
      name: 'difficulty',
      type: 'string',
      title: 'Difficulty Level',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Moderate', value: 'moderate' },
          { title: 'Challenging', value: 'challenging' },
          { title: 'Expert', value: 'expert' }
        ]
      }
    },
    {
      name: 'maxGroupSize',
      type: 'number',
      title: 'Maximum Group Size',
      validation: Rule => Rule.min(1)
    },
    {
      name: 'departures',
      type: 'array',
      title: 'Departures',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'departureId', type: 'string', title: 'Departure ID', validation: Rule => Rule.required() },
            { name: 'startDate', type: 'date', title: 'Start Date', validation: Rule => Rule.required() },
            { name: 'endDate', type: 'date', title: 'End Date', validation: Rule => Rule.required() },
            { name: 'status', type: 'string', title: 'Status', options: {
              list: [
                { title: 'Available', value: 'Available' },
                { title: 'Sold Out', value: 'Sold Out' },
                { title: 'Guaranteed to Run', value: 'Guaranteed to Run' },
                { title: 'On Request', value: 'On Request' }
              ]
            }, initialValue: 'Available' },
            { name: 'price', type: 'number', title: 'Price Override (USD)' },
            { name: 'availability', type: 'number', title: 'Spots Available' },
            { name: 'notes', type: 'text', title: 'Notes', rows: 2 }
          ]
        }
      ]
    }
  ]
};

// 2. Destination Content Type
const Destination = {
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Name',
      fields: [
        { name: 'en', type: 'string', title: 'English', validation: 'required' },
        { name: 'no', type: 'string', title: 'Norwegian' },
        { name: 'de', type: 'string', title: 'German' },
        { name: 'ar', type: 'string', title: 'Arabic' }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name.en',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      type: 'object',
      title: 'Description',
      fields: [
        { name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] },
        { name: 'no', type: 'array', title: 'Norwegian', of: [{ type: 'block' }] },
        { name: 'de', type: 'array', title: 'German', of: [{ type: 'block' }] },
        { name: 'ar', type: 'array', title: 'Arabic', of: [{ type: 'block' }] }
      ]
    },
    {
      name: 'location',
      type: 'object',
      title: 'Location',
      fields: [
        { name: 'latitude', type: 'number', title: 'Latitude' },
        { name: 'longitude', type: 'number', title: 'Longitude' },
        { name: 'country', type: 'string', title: 'Country' },
        { name: 'region', type: 'string', title: 'Region' }
      ]
    },
    {
      name: 'bestTimeToVisit',
      type: 'string',
      title: 'Best Time to Visit',
      description: 'e.g., May - September'
    },
    {
      name: 'highlights',
      type: 'array',
      title: 'Highlights',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'object', title: 'Title', fields: [
              { name: 'en', type: 'string', title: 'English' },
              { name: 'no', type: 'string', title: 'Norwegian' },
              { name: 'de', type: 'string', title: 'German' },
              { name: 'ar', type: 'string', title: 'Arabic' }
            ]},
            { name: 'description', type: 'object', title: 'Description', fields: [
              { name: 'en', type: 'text', title: 'English', rows: 2 },
              { name: 'no', type: 'text', title: 'Norwegian', rows: 2 },
              { name: 'de', type: 'text', title: 'German', rows: 2 },
              { name: 'ar', type: 'text', title: 'Arabic', rows: 2 }
            ]}
          ]
        }
      ]
    }
  ]
};

// 3. Journal Post Content Type
const JournalPost = {
  name: 'journalPost',
  title: 'Journal Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        { name: 'en', type: 'string', title: 'English', validation: 'required' },
        { name: 'no', type: 'string', title: 'Norwegian' },
        { name: 'de', type: 'string', title: 'German' },
        { name: 'ar', type: 'string', title: 'Arabic' }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title.en',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      type: 'object',
      title: 'Content',
      fields: [
        { name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] },
        { name: 'no', type: 'array', title: 'Norwegian', of: [{ type: 'block' }] },
        { name: 'de', type: 'array', title: 'German', of: [{ type: 'block' }] },
        { name: 'ar', type: 'array', title: 'Arabic', of: [{ type: 'block' }] }
      ]
    },
    {
      name: 'excerpt',
      type: 'object',
      title: 'Excerpt',
      fields: [
        { name: 'en', type: 'text', title: 'English Excerpt', rows: 3 },
        { name: 'no', type: 'text', title: 'Norwegian Excerpt', rows: 3 },
        { name: 'de', type: 'text', title: 'German Excerpt', rows: 3 },
        { name: 'ar', type: 'text', title: 'Arabic Excerpt', rows: 3 }
      ]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      initialValue: false
    }
  ]
};

// 4. Testimonial Content Type
const Testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'authorName',
      type: 'string',
      title: 'Author Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'quote',
      type: 'object',
      title: 'Quote',
      fields: [
        { name: 'en', type: 'text', title: 'English', rows: 4, validation: 'required' },
        { name: 'no', type: 'text', title: 'Norwegian', rows: 4 },
        { name: 'de', type: 'text', title: 'German', rows: 4 },
        { name: 'ar', type: 'text', title: 'Arabic', rows: 4 }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'authorImage',
      type: 'image',
      title: 'Author Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'relatedTrip',
      type: 'reference',
      title: 'Related Trip',
      to: [{ type: 'trip' }]
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: Rule => Rule.required()
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      initialValue: false
    }
  ]
};

// 5. Site Settings Singleton
const SiteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'siteTitle',
      type: 'object',
      title: 'Site Title',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'no', type: 'string', title: 'Norwegian' },
        { name: 'de', type: 'string', title: 'German' },
        { name: 'ar', type: 'string', title: 'Arabic' }
      ]
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true
      }
    },
    {
      name: 'contactEmail',
      type: 'string',
      title: 'Contact Email',
      validation: Rule => Rule.email()
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number'
    },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        { name: 'en', type: 'text', title: 'English', rows: 2 },
        { name: 'no', type: 'text', title: 'Norwegian', rows: 2 },
        { name: 'de', type: 'text', title: 'German', rows: 2 },
        { name: 'ar', type: 'text', title: 'Arabic', rows: 2 }
      ]
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social Media Links',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform', options: {
              list: [
                { title: 'Facebook', value: 'facebook' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'Twitter', value: 'twitter' },
                { title: 'YouTube', value: 'youtube' },
                { title: 'LinkedIn', value: 'linkedin' }
              ]
            }},
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'username', type: 'string', title: 'Username' }
          ]
        }
      ]
    },
    {
      name: 'metaDescription',
      type: 'object',
      title: 'Meta Description',
      fields: [
        { name: 'en', type: 'text', title: 'English', rows: 2 },
        { name: 'no', type: 'text', title: 'Norwegian', rows: 2 },
        { name: 'de', type: 'text', title: 'German', rows: 2 },
        { name: 'ar', type: 'text', title: 'Arabic', rows: 2 }
      ]
    },
    {
      name: 'footerText',
      type: 'object',
      title: 'Footer Text',
      fields: [
        { name: 'en', type: 'text', title: 'English', rows: 2 },
        { name: 'no', type: 'text', title: 'Norwegian', rows: 2 },
        { name: 'de', type: 'text', title: 'German', rows: 2 },
        { name: 'ar', type: 'text', title: 'Arabic', rows: 2 }
      ]
    }
  ]
};

module.exports = {
  Trip,
  Destination,
  JournalPost,
  Testimonial,
  SiteSettings
};