import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-client');
}

export default function WithScreenshotsDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-client" />;
}
