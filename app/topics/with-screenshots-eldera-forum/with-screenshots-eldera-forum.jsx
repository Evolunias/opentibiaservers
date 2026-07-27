import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-forum');
}

export default function WithScreenshotsElderaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-forum" />;
}
