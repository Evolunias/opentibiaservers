import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-wiki');
}

export default function WithScreenshotsSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-wiki" />;
}
