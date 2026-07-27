import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-register');
}

export default function WithScreenshotsEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-register" />;
}
