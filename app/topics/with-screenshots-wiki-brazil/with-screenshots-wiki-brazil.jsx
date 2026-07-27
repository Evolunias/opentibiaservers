import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-brazil');
}

export default function WithScreenshotsWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-brazil" />;
}
