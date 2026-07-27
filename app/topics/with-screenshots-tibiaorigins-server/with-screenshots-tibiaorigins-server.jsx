import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-server');
}

export default function WithScreenshotsTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-server" />;
}
