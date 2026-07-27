import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-login');
}

export default function WithScreenshotsDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-login" />;
}
