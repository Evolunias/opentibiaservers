import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-wiki');
}

export default function WithScreenshotsDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-wiki" />;
}
