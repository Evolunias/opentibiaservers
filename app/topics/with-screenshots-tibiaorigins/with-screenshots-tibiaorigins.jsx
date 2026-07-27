import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins');
}

export default function WithScreenshotsTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins" />;
}
