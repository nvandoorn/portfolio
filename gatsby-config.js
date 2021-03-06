module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nicholas Van Doorn',
        short_name: 'NVD',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/ie.png' // This path is relative to the root
        // of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
