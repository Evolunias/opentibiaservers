import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-forum');
}

export default function WithScreenshotsTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-forum" />;
}
