'use client';
import { useEffect } from 'react';

const AnalyticsTest = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'test_event', {
                'event_category': 'testing',
                'event_label': 'analytics_test'
            });
            console.log('Analytics test event sent');
        }
    }, []);

    return null;
};

export default AnalyticsTest;
