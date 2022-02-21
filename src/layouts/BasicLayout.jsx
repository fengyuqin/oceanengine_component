import { PureComponent } from 'react';
import DocumentTitle from 'react-document-title';
class Page extends PureComponent {
  render() {
    const { children, documentTitle } = this.props;
    return <DocumentTitle title={documentTitle}>{children}</DocumentTitle>;
  }
}
export default Page;
