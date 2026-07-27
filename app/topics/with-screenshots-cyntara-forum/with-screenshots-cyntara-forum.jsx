import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-forum');
}

export default function WithScreenshotsCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-forum" />;
}
