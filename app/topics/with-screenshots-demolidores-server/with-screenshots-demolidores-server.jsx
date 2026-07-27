import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-server');
}

export default function WithScreenshotsDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-server" />;
}
