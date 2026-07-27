import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-forum');
}

export default function WithScreenshotsSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-forum" />;
}
