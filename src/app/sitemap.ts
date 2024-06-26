import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://martians.cloud',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://martians.cloud/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/services/design',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/services/context',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/services/mobile',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/services/site',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/contacts',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/technologies',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.99,
        },
        {
            url: 'https://martians.cloud/policy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.99,
        },
    ]
}