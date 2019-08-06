import React from 'react';
import { connect } from 'react-redux';
import showdown from 'showdown';
import Sidebar from 'views/docs/sidebar';
import { allModulesRequest } from 'store/actions/allModules';


class Docs extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    title: '',
    content: '',
  };

  componentDidMount() {
    this.props.allModulesRequest();
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
          {console.log(this.state, '<<<')}
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

export default connect(mapStateToProps, { allModulesRequest })(Docs);
