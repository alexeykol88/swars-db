import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMsg from '../error-msg';

const withData = (View) => {

    return class extends Component {
  
      state = {
        data: null,
        loading: true,
        error: false
      };
    
      updateData() {
        this.setState({
          loading: true,
          error: false
        });

        this.props.getData()
          .then((data) => {
            this.setState({
              data,
            loading: false
          });
          })
          .catch(() => {
            this.setState({
              error: true,
              loading: false
            })
          })
      }

      componentDidMount() {
        this.updateData();
      }

      componentDidUpdate(prevProps) {
        if (this.props.getData !== prevProps.getData) {
          this.updateData();
        }
      }
  
      render() {
        const {data, loading, error} = this.state;
  
  
        if(loading) {
          return <Spinner/>
        }

        if(error) {
          return <ErrorMsg/>
        }
  
        return <View {...this.props} data={data}/>
      }
    };
  }

  export default withData;