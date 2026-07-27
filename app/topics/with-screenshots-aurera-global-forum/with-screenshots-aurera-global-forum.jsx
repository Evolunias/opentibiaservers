import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-forum');
}

export default function WithScreenshotsAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-forum" />;
}
