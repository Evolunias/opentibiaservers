import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-ots');
}

export default function WithScreenshotsTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-ots" />;
}
