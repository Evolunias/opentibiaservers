import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-client');
}

export default function WithScreenshotsTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-client" />;
}
