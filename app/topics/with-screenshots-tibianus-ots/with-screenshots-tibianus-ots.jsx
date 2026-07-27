import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-ots');
}

export default function WithScreenshotsTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-ots" />;
}
