import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-forum');
}

export default function WithScreenshotsEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-forum" />;
}
