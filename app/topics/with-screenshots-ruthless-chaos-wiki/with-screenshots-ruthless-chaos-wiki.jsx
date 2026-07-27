import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-wiki');
}

export default function WithScreenshotsRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-wiki" />;
}
