import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-forum');
}

export default function WithScreenshotsBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-forum" />;
}
