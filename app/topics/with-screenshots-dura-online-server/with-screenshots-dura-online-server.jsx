import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-server');
}

export default function WithScreenshotsDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-server" />;
}
