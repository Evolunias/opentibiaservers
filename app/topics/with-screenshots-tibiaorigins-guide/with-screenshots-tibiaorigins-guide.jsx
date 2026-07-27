import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-guide');
}

export default function WithScreenshotsTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-guide" />;
}
