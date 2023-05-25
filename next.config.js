/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        secretKeyTech:'bb4984e470468da6c24fb9583bf54eab'
    },
    images: {
        formats: ['image/webp'],
        domains: ['feeds.abplive.com'],
        domains: ['www.hindustantimes.com'],
       

    },
   
}

module.exports = nextConfig
