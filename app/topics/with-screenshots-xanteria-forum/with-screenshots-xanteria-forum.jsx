import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-forum');
}

export default function WithScreenshotsXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-forum" />;
}
