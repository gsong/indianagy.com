# Google Analytics 4 Testing Setup

This guide explains how to set up separate Google Analytics 4 properties for production and testing environments.

## Why Use Separate GA4 Properties?

- **Clean Production Data**: Keeps development/testing traffic separate from real user analytics
- **Safe Testing**: Allows testing GA4 implementations without affecting production metrics
- **Environment Isolation**: Different teams can work with testing data without impacting live analytics

## Step 1: Create a Testing GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your account or create a new one
3. Click "Create Property"
4. Set up your testing property:
   - **Property name**: `indianagy.com - Testing` (or similar)
   - **Reporting time zone**: Same as your production property
   - **Currency**: Same as your production property
5. Complete the property creation
6. Go to **Admin** → **Data Streams** → **Add stream** → **Web**
7. Add your testing URL (can be the same domain, or use localhost/preview URLs)
8. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Configure Environment Variables

### Local Development

Create or update your local `.env` file:

```
PUBLIC_GA4_MEASUREMENT_ID=G-YOUR-TESTING-ID
```

### Netlify Configuration

1. Go to your [Netlify site dashboard](https://app.netlify.com/sites/indianagy-dot-com/settings/env)
2. Navigate to **Site settings** → **Environment variables**
3. Configure different values for different contexts:

#### Production Environment

- Variable: `PUBLIC_GA4_MEASUREMENT_ID`
- Value: `G-YOUR-PRODUCTION-ID`
- Scopes: Check "Production" only

#### Preview/Branch Deploys

- Variable: `PUBLIC_GA4_MEASUREMENT_ID`
- Value: `G-YOUR-TESTING-ID`
- Scopes: Check "Deploy previews" and "Branch deploys"

## Step 3: Verify Setup

1. **Local Development**:
   - Run `pnpm dev`
   - Check browser dev tools to see if the testing GA4 ID is loaded
   - Verify data appears in your testing GA4 property

2. **Preview Deploys**:
   - Create a branch and push changes
   - Check the preview deploy uses the testing GA4 ID
   - Verify data flows to the testing property

3. **Production**:
   - Verify production site uses the production GA4 ID
   - Confirm production data is separate from testing data

## Best Practices

- **Never commit** your actual GA4 IDs to the repository
- Use descriptive names for your testing property to avoid confusion
- Regularly clean up test data or create new testing properties if needed
- Consider using different GA4 properties for different team members if needed
