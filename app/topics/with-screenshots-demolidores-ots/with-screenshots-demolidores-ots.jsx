import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-ots');
}

export default function WithScreenshotsDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-ots" />;
}
