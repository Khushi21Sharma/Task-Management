// Function to report web vitals performance metrics
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Collect and report the Cumulative Layout Shift (CLS) metric
      getCLS(onPerfEntry);
      // Collect and report the First Input Delay (FID) metric
      getFID(onPerfEntry);
      // Collect and report the First Contentful Paint (FCP) metric
      getFCP(onPerfEntry);
      // Collect and report the Largest Contentful Paint (LCP) metric
      getLCP(onPerfEntry);
      // Collect and report the Time to First Byte (TTFB) metric
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
