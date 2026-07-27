import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-rules');
}

export default function WithScreenshotsSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-rules" />;
}
