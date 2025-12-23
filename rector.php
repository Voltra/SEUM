<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Php83\Rector\ClassMethod\AddOverrideAttributeToOverriddenMethodsRector;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Set\ValueObject\SetList;
use Rector\Strict\Rector\Empty_\DisallowedEmptyRuleFixerRector;
use Rector\TypeDeclaration\Rector\StmtsAwareInterface\DeclareStrictTypesRector;
use RectorLaravel\Set\LaravelLevelSetList;
use RectorLaravel\Set\LaravelSetList;

return RectorConfig::configure()
    ->withParallel()
    ->withPaths([
        __DIR__.'/app',
        __DIR__.'/config',
        __DIR__.'/database',
        __DIR__.'/routes',
        __DIR__.'/tests',
    ])
    ->withSkip([
        __DIR__.'/storage',
        __DIR__.'/vendor',
        __DIR__.'/node_modules',
        __DIR__.'/public',
        __DIR__.'/resources',
        '*/cache/*',
        '*/stubs/*',
    ])
    ->withCache()
    ->withIndent(indentChar: '	', indentSize: 1)
    ->withSets([
        LaravelLevelSetList::UP_TO_LARAVEL_120,
        LaravelSetList::LARAVEL_120,
        LaravelSetList::LARAVEL_CODE_QUALITY,
        LaravelSetList::LARAVEL_COLLECTION,
        LaravelSetList::LARAVEL_IF_HELPERS,
        LevelSetList::UP_TO_PHP_83,
        SetList::CODE_QUALITY,
        SetList::DEAD_CODE,
        SetList::EARLY_RETURN,
        SetList::STRICT_BOOLEANS,
        SetList::TYPE_DECLARATION,
    ])
    ->withRules([
        AddOverrideAttributeToOverriddenMethodsRector::class,
        DeclareStrictTypesRector::class,
    ])
    ->withSkip([
        DisallowedEmptyRuleFixerRector::class,
    ])
    ->withPhpSets()
    /*->withImportNames(
        importNames: false,
        importShortClasses: false,
        removeUnusedImports: true,
    )*/
    ->withPreparedSets(
        deadCode: true,
        codeQuality: true,
        earlyReturn: true,
    );
