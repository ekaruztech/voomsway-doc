import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import showdown from 'showdown';
import Sidebar from 'views/docs/sidebar';
import docSlug from 'services/docSlug';
import { allModulesRequest } from 'store/actions/allModules';


class Docs extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    title: this.props.modules[0] ? this.props.modules[0].title : '',
    content: this.props.modules[0] ? this.props.modules[0].body : '',
  };

  componentDidMount() {
    this.props.allModulesRequest().then(
      () => {
        const { modules } = this.props;
        const initialDocs = modules[0];
        const activeDocTitle = this.props.match.params.title;
        var activeDoc;

        if (activeDocTitle) {
          modules.map(module => {
            let docMatch = (docSlug(module.title) === activeDocTitle);

            if (docMatch) {
              return activeDoc = [ module ];
            } else {
              const sectionMatch = module.children.filter(child => (
                docSlug(child.title).includes(activeDocTitle)
              ));

              if (!(sectionMatch.length === 0)) {
                return activeDoc = sectionMatch;
              }
            }
          });
          return this.setState({
            title: activeDoc[0].title,
            content: activeDoc[0].body,
          });
        } else {
          if(initialDocs) {
            this.props.history.push(
              `/docs/${docSlug(initialDocs.title)}`
            );
          }
        }
      }
    );
  };

  handleContentChange = (title, content) => {
    this.setState({
      title,
      content,
    });
  };

  render() {
    const { isLoading, modules } = this.props;
    const mdConverter = new showdown.Converter();

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className='sidebar-wrapper'>
        <Sidebar
          isLoading={isLoading}
          modules={modules}
          changeContent={this.handleContentChange} 
        />
        <section className='content'>
          <h3>{this.state.title}</h3>

          <p dangerouslySetInnerHTML={ 
            { __html: mdConverter.makeHtml(this.state.content) }
          } />
        </section>
      </div>
    );
  };
} 

const mapStateToProps = (state) => {
  return {
    isLoading: state.allModules.isLoading,
    modules: state.allModules.modules,
  };
}

export default withRouter(connect(mapStateToProps, { allModulesRequest })(Docs));
