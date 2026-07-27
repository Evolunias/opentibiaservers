import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-client');
}

export default function WithScreenshotsDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-client" />;
}
