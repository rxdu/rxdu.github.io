/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
/* App imports */
import Config from '../../../config';

class Comments extends React.Component {
  componentDidMount() {
    const { pageCanonicalUrl } = this.props;

    // Disqus calls these with `this` bound to its config, so they must not be arrow functions.
    // Existing threads are keyed by page URL only; setting an identifier would open new, empty threads.
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config() {
          this.page.url = pageCanonicalUrl;
        },
      });
    } else {
      window.disqus_config = function () {
        this.page.url = pageCanonicalUrl;
      };
      (function () {
        // eslint-disable-next-line no-undef
        const d = document;
        const s = d.createElement('script');
        s.src = Config.disqusScript;
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      }());
    }
  }

  render() {
    return (
      <div>
        <div id="disqus_thread" />
      </div>
    );
  }
}

Comments.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
};

export default Comments;
