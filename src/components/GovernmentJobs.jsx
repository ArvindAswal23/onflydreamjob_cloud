import React, { useEffect } from 'react';

const iframes = {
  sarkarinaukri:
    '<iframe id =iframe1 style="position:absolute;" width="100%" height="100%" scrolling="yes" frameborder="yes" allow="autoplay" src="https://milegisarkarinaukri.online/home"></iframe>',
};

const Iframe = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const GovernmentJobs = () => {
  useEffect(() => {
    document.title = "Government Jobs | Onfly Dream Job";
  }, [])
  return (
    < Iframe iframe={iframes["sarkarinaukri"]} allow="autoplay" />

  )
}

export default GovernmentJobs