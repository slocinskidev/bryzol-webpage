import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, description, lang, meta, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            url
          }
        }
      }
    `,
  );
  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathname ? `${site.siteMetadata.url}${pathname}` : `${site.siteMetadata.url}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: `%s | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.url}/logo/maskable_icon.png`,
        },
        {
          property: `og:locale`,
          content: 'pl_PL',
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
  pathname: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
};

export default SEO;
